import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisV, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, FormControlLabel, Table, Typography } from '@mui/material';
import { Box, textAlign } from '@mui/system';
import React from 'react';
import INVOICES from './data/invoices';
import styles from './InvoiceManagerDashboard.module.scss';
import IInvoicesState from './state/IInvoicesState';

class InvoiceManagerDashboard extends React.Component<{}, IInvoicesState> {

  constructor(props: any) {
    super(props);

    this.state = {
      invoices: INVOICES
    }
  }

  public render() {
    return (
      <Box display="flex" flexDirection="column" className={`${styles.InvoiceManagerDashboard}`}>
        <Box>
          <table className={`${styles.invoicesTable}`}>
            <thead>
              <th style={{width:'30%', paddingLeft:'2rem'}}>
                Client
              </th>
              <th style={{width:'10%'}}>
                Amount
              </th>
              <th style={{width:'15%'}}>
                Address
              </th>
              <th style={{width:'15%'}}>
                Issued on
              </th>
              <th style={{width:'10%', textAlign:'center'}}>
                Status
              </th>
              <th style={{width:'15%', textAlign:'center'}}>
              </th>
              <th style={{width:'5%'}}>
              </th>
            </thead>
            <tbody>
              {
                this.state.invoices.map((invoice, index) => {
                  return (
                    <tr>
                      <td>
                        <Box display="flex" style={{ position:'relative'}}>
                          <Box m={1} sx={{width:'40px', textAlign:'center'}}>
                            <div style={{border:'1px solid', width:'40px', height:'40px', borderRadius:'50%', position:'absolute', top:'50%', transform:'translateY(-50%)', background:'#2196F3'}}>
                              <span className={`${styles.initials}`}>{invoice.client.initials}</span>
                            </div>
                          </Box>
                          <Box m={1}>
                            <Typography variant="h6"><b>{invoice.client.name}</b></Typography>
                            <Typography variant="subtitle2">{invoice.client.website}</Typography>
                          </Box>
                        </Box>
                      </td>
                      <td>
                        <Typography variant="body2">${invoice.amount}</Typography>
                      </td>
                      <td>
                        <Typography variant="body2">
                          {invoice.address.street}<br/>
                          {invoice.address.city}, {invoice.address.state} {invoice.address.zip} <br/>
                          {invoice.address.country}
                        </Typography>
                      </td>
                      <td>
                        <Typography variant="body2">January 1, 2020</Typography>
                      </td>
                      <td>
                        <div style={{border:'1px solid', padding:'0.5rem', textAlign:'center', borderRadius:'0.25rem', background:'#4CAF50'}}>
                          <Typography variant="body2">{invoice.status}</Typography>
                        </div>
                      </td>
                      <td style={{textAlign:'center'}}>
                        <Button variant="contained" color="primary" size="small" style={{marginRight:'0.5rem', padding:'0.75rem'}}>
                          <FontAwesomeIcon icon={faPrint} style={{fontSize:'21px', marginRight:'0.5rem'}}/>
                          Print
                        </Button>
                      </td>
                      <td className={`${styles.actions}`}>
                        <FontAwesomeIcon icon={faEllipsisV} className={`${styles.actionIcon}`}/>
                      </td>
                    </tr>
                  )
                })
              }
              
              
            </tbody>
          </table>            
        </Box>
      </Box>
    );
  }
}

export default InvoiceManagerDashboard;
