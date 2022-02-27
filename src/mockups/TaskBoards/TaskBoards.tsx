import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import React from 'react';
import styles from './TaskBoards.module.scss';

class TaskBoards extends React.Component{
  constructor(props: any){
    super(props);
  }

  handleDateClick = (args: any) =>{
    alert(args.dateStr)

  }

  public render(){
    return(
      <div className={styles.TaskBoards}>        
        <FullCalendar plugins={[ dayGridPlugin, interactionPlugin ]}        
        initialView="dayGridMonth" 
        dateClick={this.handleDateClick}
        events={[
          { title: 'event 1', date: '2022-02-27', classNames:[`${styles.test}`] },
        ]}></FullCalendar>
      </div>
    )
  }
}

export default TaskBoards;
