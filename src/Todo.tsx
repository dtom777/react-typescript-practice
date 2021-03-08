import { type } from 'os';
import React from 'react';
import { TodoType } from './types/todo';

const Todo = (props: Omit<TodoType, 'id'>) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? '[完]' : '[未]';
  return <p>{`${completeMark} ${title}(ユーザー：${userId})`}</p>;
};

export default Todo;
