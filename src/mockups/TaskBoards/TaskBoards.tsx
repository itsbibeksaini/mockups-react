import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React from 'react';
import styles from './TaskBoards.module.scss';

class TaskBoards extends React.Component{
  constructor(props: any){
    super(props);
  }

  public render(){
    return(
      <div className={styles.TaskBoards}>
        <FullCalendar plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"></FullCalendar>
      </div>
    )
  }
}

export default TaskBoards;
