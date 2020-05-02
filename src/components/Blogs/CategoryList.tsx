import React from "react";
import { Chip, Box } from "@material-ui/core";

export interface Props {
  categories: string[];
}
export interface ItemProps {
  label: string;
}

export const CategoryItem: React.FC<ItemProps> = (props) => {
  return <Chip size="small" label={`#${props.label}`}></Chip>;
};

const CategoryList: React.FC<Props> = (props) => {
  return (
    <Box display="flex" my={2}>
      {props.categories.map((category) => {
        return (
          <Box key={category} mx={0.5}>
            <CategoryItem label={category}></CategoryItem>
          </Box>
        );
      })}
    </Box>
  );
};

export default CategoryList;
