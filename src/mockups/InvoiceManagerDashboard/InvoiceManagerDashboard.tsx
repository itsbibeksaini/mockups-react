import { Table, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './InvoiceManagerDashboard.module.scss';

class InvoiceManagerDashboard extends React.Component {
  public render() {
    return (
      <Box display="flex" flexDirection="column" className={`${styles.InvoiceManagerDashboard}`}>
        <Box>
          <table className={`${styles.invoicesTable}`}>
            <thead>
              <th style={{width:'25%', paddingLeft:'2rem'}}>
                Name
              </th>
              <th style={{width:'15%'}}>
                Company
              </th>
              <th style={{width:'15%'}}>
                Address
              </th>
              <th style={{width:'15%'}}>
                Issued on
              </th>
              <th style={{width:'15%'}}>
                Amount
              </th>
              <th style={{width:'10%', textAlign:'center'}}>
                Status
              </th>
              <th style={{width:'5%'}}>

              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Box display="flex" style={{ position:'relative'}}>
                    <Box m={1} sx={{width:'40px', textAlign:'center'}}>
                      <div style={{border:'1px solid', width:'40px', height:'40px', borderRadius:'50%', position:'absolute', top:'50%', transform:'translateY(-50%)', background:'#2196F3'}}>
                        <span className={`${styles.initials}`}>JD</span>
                      </div>
                    </Box>
                    <Box m={1}>
                      <Typography variant="h6">John Doe</Typography>
                      <Typography variant="subtitle2">johndoe@xyzindustries.com</Typography>
                    </Box>
                  </Box>
                </td>
                <td>
                  <Typography variant="h6">
                    <b>XYZ Industries</b>
                  </Typography>
                </td>
                <td>
                <Typography variant="body2">
                  123 Main St. <br />
                  Anytown, CA 12345 <br />
                  United States <br />
                  
                </Typography>
                </td>
                <td>
                  <Typography variant="body2">January 1, 2020</Typography>
                </td>
                <td>
                  <Typography variant="body2">$1,000.00</Typography>
                </td>
                <td>
                  <div style={{border:'1px solid', padding:'0.5rem', textAlign:'center', borderRadius:'0.25rem', background:'#4CAF50'}}>
                    <Typography variant="body2">Paid</Typography>
                  </div>
                </td>
                <td>

                </td>
              </tr>
              
            </tbody>
          </table>            
        </Box>
      </Box>
    );
  }
}

export default InvoiceManagerDashboard;
