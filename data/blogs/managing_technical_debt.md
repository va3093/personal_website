---
title: "Effective technical debt management"
createdAt: "2018-03-21"
categories: ["tech", "management"]
summary: "A healthy culture of dealing with technical debt that is affecting your users and your team is critical to maintaining sanity in your developer team. It also allows you to take on technical debt to deliver value in the short term because you and your team are confident that you will pay this off when the time is right."
heroImageUrl: "/heroImages/under-the-rug.jpg"
---

## Introduction

Technical debt is one of the most difficult aspects of managing a software project. The reason for this is that its causes can often go undetected and the scale of its impact is only realised after its too late. Like any form of debt the only way to deal with it is to be proactive and deal with the abstract future consequences in the present before they materialise. This post outlines an approach to dealing with your technical debt in a pragmatic way.

## How you can be grateful for your technical debt

Every programmer is familiar with rising blood pressure and eye rolls experienced when working on a feature or bug fix that is impacted by some technical debt. Having a systematic approach to dealing with technical debt allows the experience of dealing with technical debt to become a positive one. When you know that a given piece of technical debt will be addressed in the write time, you can be thankful for the functionality it was able to provide to your users despite limited resources like time or experience. If developers know that the technical debt will remain there unresolved despite significant stability risks, they often consider leaving their job as the only way to escape working on that piece of sh%t.

I see four fundamental components of any tech debt management strategy. These are:

1. Tracking
2. Learning
3. Prioritising
4. Paying back your debt

## Tracking

The purpose of tracking your technical debt is so that you can evaluate the impact your technical debt is having on your product. How comprehensive your tracking is will determine the effectiveness of your prioritisation that comes later.

The obvious trade off you have to bear in mind is the additional friction you need to add to your existing development pipeline in order have up to date data on the impact of your technical debt. Having tried multiple different approaches the following is what I think provides minimal overhead but a clear enough picture of what is going on.

First of all you need to define your technical debt. This is an art in its self. The important thing is not just say `X is broken` or `Y needs to be rewritten`. Tech debt should be clearly actionable `Implement latest version library to fix X` or `Implement redesigned approach to Y`. If your declaration of tech debt only includes the problem it will never be addressed. I recommend the following template for defining Tech debt.

```Markdown
## Description:
Describe the particular design or piece of code that you think is tech debt

## Actions:
List the things that need to be done in order for this item to no longer be declared tech debt

## Historical impact:
This is the place where team members will list times where this item of tech debt has affected them or their users

## Predictions of future impacts:
This where you describe how this tech debt might affect users or developers in the future

## Lessons:
Here you describe lessons this peace of tech debt has taught you or your team

## Score:
Here is where you assess the impact of this piece of tech debt. You can use the simple following matrix:

|                   | easy | moderate | hard |
|-------------------|------|----------|------|
| low severity      | 3    | 2        | 1    |
| moderate severity | 4    | 3        | 2    |
| severe            | 5    | 4        | 3    |
```

Once you have defined your tech debt you need a central place where they can be searched and prioritised. If you use Jira or Trello I would create a ticket for each actionable piece of tech debt and make sure they are tagged or assigned to an epic so that they can be easily discovered.

People can update the tickets manually if they think of potential impact or want to change the actions. But what you want to do is try an capture the frustration of dealing with tech debt as it is happening. I have found that adding a section to our [Github PR template](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository) that contains the following:

```markdown
## Was this PR impacted by any tech debt:
If so please describe how it was impacted and reference this PR in the Tech debt ticket
```

## Learning

There is always something to learn from your technical debt. For technical debt cropped up in your system accidentally without you realising it, you need to understand how your planning process needs to be improved. A common way technical debt is incurred without our knowledge is when there is subtle scope creep in a product which over time means that the actual usage of the system you designed doesn’t match exactly the way it was planned during the design phase. In this case, what is helpful is look at the actual scope creep and assess if a) it was necessary and b) if it could have been foreseen. The answers to both those questions are valuable lessons that can be applied in the future.

Some technical debt is planned. For example you might decide to deploy your whole backend on Heroku because you want to get your product to market as soon as possible. You are aware that not having complete control over how you infrastructure is manages will be constraining and will make various features like service discovery or cost optimisation difficult. When you review this piece of technical debt in the future you might find that the cost to your developer team or product team is much more or much less than you expected. Understanding the reasons behind why things didn’t turn out like you planned will also help inform decisions in the future.

Just how it is important to have actions in your tech debt tickets before you start working on them. I think it is important for you to have some learnings jotted down and for you to share those learnings with your team.

## Prioritising

Over time you will start seeing certain tech debt tickets fill up. The benefit of this, is that often the actions for tech debt aren’t immediately obvious, but when the consequences of tech debt is felt then the actions become more clear.

Once you have a living backlog of tech debt tickets the next bit of the process is to set up some kind of schedule where you go through the tech debt tickets, make sure their scores are up to date and prioritise your list. The scores should be your guide when prioritising, but is only a guide and you

## Executing

If you have been following the steps above the final step will follow naturally. Developers usually complain that they never get time to work on technical debt. I have found that the reason for this is because developers are not good at communicating the value of some of these tasks. I hope you can see that the process above is designed to clearly measure the impact of technical debt. Project managers or owners can then fully buy into technical debt because the only talk in terms `Value to the business`.

Tech debt items that are costing you precious developer time or user experience can then be scheduled with confidence. Additionally, if your team go through a phase where there isn’t a lot of features to work on, you know you can fall back on your list of tech debt tickets that will add value to your team or users.

A healthy culture of dealing with technical debt that is affecting your users and your team is critical to maintaining sanity in your developer team. It also allows you to take on technical debt to deliver value in the short term because you and your team are confident that you will pay this off when the time is right.
