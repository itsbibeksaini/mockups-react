import React from 'react';
import styles from './TaskBoards.module.scss';

class TaskBoards extends React.Component{
  constructor(props: any){
    super(props);
  }

  public render(){
    return(
      <div className={styles.TaskBoards}>
        test
      </div>
    )
  }
}

export default TaskBoards;
