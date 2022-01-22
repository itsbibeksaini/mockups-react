import React, { FC } from 'react';
import styles from './TaskBoards.module.scss';

interface TaskBoardsProps {}

const TaskBoards: FC<TaskBoardsProps> = () => (
  <div className={styles.TaskBoards}>
    TaskBoards Component
  </div>
);

export default TaskBoards;
