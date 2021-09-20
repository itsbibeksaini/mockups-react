import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import styles from './AccountTab.module.scss';
import { FIELD_DATA } from './data/fields-data';
import IAccountTabState from './state/IAccountTabState';

class AccountTab extends React.Component<{}, IAccountTabState>{

  constructor(props:any){
    super(props)

    this.state = {
      fieldCards: FIELD_DATA
    }
  }

  render(){
    return (
      <div className={`${styles.AccountTab}`}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">          
          {
            this.state.fieldCards.map((field, index) => {
              return (
                <Box m={0.5} display="flex" className={`${styles.fieldCard}`} key={index}>
                  <Box flexGrow={1}>
                    <header className={`${styles.fieldHeader}`}>
                      <Typography>{field.fieldName}</Typography>
                    </header>
                    <div>
                      <Typography variant="subtitle1">{field.fieldValue}</Typography>
                    </div>
                  </Box>
                  {
                    !field.disabled && (
                      <Box style={{position:'relative'}}>
                        <IconButton color="primary" className={`${styles.fieldEdit}`}>
                          <FontAwesomeIcon icon={faPencilAlt} style={{color:'#000'}}/>
                        </IconButton>
                      </Box>
                    )
                  }
                </Box>
              )
            })
          }
        </Box>                
      </div>
    )
  }
}

export default AccountTab;
