---
title: "Representing trees in a relational database"
createdAt: "2022-10-09"
categories: ["data_modelling", "data_structures", "algos"]
summary: "Representing trees in a relational database is hard. There are various different solutions but they all have trade-offs."
heroImageUrl: "/heroImages/tree.jpg"
---

## Introduction
Whenever you need to store a hierarchy of data in a database you are confronted with the problem of how to store trees in relational databases. There are, of course, other storage systems designed for this problem like [Neo4j](https://neo4j.com). However, your existing data is probably currently stored in a relational database. So if you could find a data model that would fit inside a relational database, that would probably be your preference.

Thankfully, there are a few different approaches. They all have trade-offs, but these trade-offs may be palatable for your use cases.

In this post, I will discuss the general problem and will provide tl;dr's of different solutions. Each of the different solutions will have its own dedicated blog post with examples.

## Potential use cases
Almost all data forms a hierarchy. Consider a simplified data model for Twitter.

[![](https://mermaid.ink/img/pako:eNo9kEFvgzAMhf8K8olKtAzYaMthl23HnrbdcnETA9FIghKzqqr47wtU68WyP1vPeu8G0imCBtrBXWSPnhNhvwP5dCmbZLt9Tb4uRJyu9Q5OpDQKu5IVvDljyHJI_5sNZGDIG9Qqat-ETRIB3JMhAU1sFfofAcLO8Q4ndp9XK6FhP1EG06iQ6V1j59FA0-IQHvRDaXb-AQeHiuJ4A76Oi4tOB46S0tlWdwuf_BBxzzyGJs-X9a7T3E_nnXQmD1otlvvfY53XZX3AsqJ6X-FLVSl5Lo6HtnwuWrV_KkqEec6A1v-ne2RrcvMf0YBqqg?type=png)](https://mermaid.live/edit#pako:eNo9kEFvgzAMhf8K8olKtAzYaMthl23HnrbdcnETA9FIghKzqqr47wtU68WyP1vPeu8G0imCBtrBXWSPnhNhvwP5dCmbZLt9Tb4uRJyu9Q5OpDQKu5IVvDljyHJI_5sNZGDIG9Qqat-ETRIB3JMhAU1sFfofAcLO8Q4ndp9XK6FhP1EG06iQ6V1j59FA0-IQHvRDaXb-AQeHiuJ4A76Oi4tOB46S0tlWdwuf_BBxzzyGJs-X9a7T3E_nnXQmD1otlvvfY53XZX3AsqJ6X-FLVSl5Lo6HtnwuWrV_KkqEec6A1v-ne2RrcvMf0YBqqg)

This is a tree data structure. However, it does not pose major problems because the relationships are one-way. In other words, the shape of the tree is predictable because it does not recurse on itself. This type of tree is called a DAG (Directed Acyclic Graph).

Representing this tree in a relational database has been proven over and over again to be very effective. When you query this data structure you can filter your target resource (eg Tweets) based on some parent condition (eg user_id = 1). When performing aggregations you can use `group by`s since you know exactly who the parents of each node in the tree are.

```sql
-- Count number of comments per tweet for user
SELECT
	t.id, count(*)
FROM comments c, tweets t
WHERE c.tweet_id = t.id
	AND t.user_id = 1
GROUP BY t.id
```

However if we make a slight modification to the above data model we can get into trouble.

[![](https://mermaid.ink/img/pako:eNpVkEFvgzAMhf8K8olKtAzYaMthl23HnrbdcnGJgWgkQYlZVSH--wJVK-1iPX-2_OQ3QW0lQQVNby91h44jYb49uXgpm2i7fY2-LkQcr_UGTiQVCrOSFbxZrcmwj-9iI8xd_luABDQ5jUoGy0mYKBLAHWkSUAUp0f0IEGYOeziy_byaGip2IyUwDhKZ3hW2DjVUDfb-QT-kYusesLcoKbQT8HVYnmuV53CytqZR7cJH1wfcMQ--StNlvGsVd-N5V1udeiWXJLrfY5mWeXnAvKByX-BLUcj6nB0PTf6cNXL_lOUI85wArf6nW5JroPMfU0Ny2A?type=png)](https://mermaid.live/edit#pako:eNpVkEFvgzAMhf8K8olKtAzYaMthl23HnrbdcnGJgWgkQYlZVSH--wJVK-1iPX-2_OQ3QW0lQQVNby91h44jYb49uXgpm2i7fY2-LkQcr_UGTiQVCrOSFbxZrcmwj-9iI8xd_luABDQ5jUoGy0mYKBLAHWkSUAUp0f0IEGYOeziy_byaGip2IyUwDhKZ3hW2DjVUDfb-QT-kYusesLcoKbQT8HVYnmuV53CytqZR7cJH1wfcMQ--StNlvGsVd-N5V1udeiWXJLrfY5mWeXnAvKByX-BLUcj6nB0PTf6cNXL_lOUI85wArf6nW5JroPMfU0Ny2A)

Now, users can comment on comments. This now forms a Directed cyclic graph (DCG). The tree structure formed now is unpredictable making it very hard to query for portions of the comments without doing graph traversals.

Here are some queries that would be very tricky to write against the comments table

- If we deleted a comment how many descendants would also need to be deleted
- Get me all the comments for a tweet but never show more than 5 children of a comment
- Get me the first 50 comments by showing the oldest comments and all of its children
- Get me the first 50 comments by showing all the comments in a given level in the tree before showing child comments

Unfortunately, when we get into this situation there is no silver bullet solution. All of the solutions have trade-offs. Thankfully, the real-world manifestations of your data might fit nicely within the constraints of one of the solutions below.

## In memory tree traversal

### tl;dr:
- **Data model**: Nullable column called *parent_comment_id*
- **On insert**: Always link to the parent comment_id.
- **On read**: Build the tree in memory and perform tree traversal.

[Read full blog](/blog/todo)

## Tree descriptors

### tl;dr

- **Data model**: `left` and `right` int columns. `left` describes hops performed on the way down the tree. `right` describes the number of hops the way up the tree.
- **On insert**: Update all rows with `right` values greater than the inserted row.
- **On read**: Can do indexed lookups that perform depth-first searches on your tree.

[Read full blog](/blog/todo)

## Lineage descriptors
- **Data model**: `lineage` string column that explains the position in the tree
- **On insert**: Increment the `lineage` column appropriately
- **On read**: Can sort or filter using the `lineage` column.