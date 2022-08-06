import React, { FC } from 'react';
import styles from './NewWorklogPanel.module.scss';

interface NewWorklogPanelProps {}

class NewWorklogPanel extends React.Component<NewWorklogPanelProps,{}>{

  constructor(props: NewWorklogPanelProps){
    super(props)
  }


  render(): React.ReactNode {
      return(
        <div className={styles.NewWorklogPanel}>jkfskjddsjkf</div>
      )
  }
}

export default NewWorklogPanel;
