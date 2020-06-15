import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import Countup from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    const modifiedDate = new Date(lastUpdate).toDateString();
    
    const turkishDate = (modifiedDate) => {
        let dates= modifiedDate.split(' ');
        console.log(modifiedDate);
        let weekDay = dates[0];
        let month = dates[1];
        let monthDay = dates[2];
        let year= dates[3];
        
        switch(dates[0]){

            case 'Mon': weekDay='Pzt'; break;
            case 'Tue': weekDay='Salı'; break;
            case 'Wed': weekDay='Çar'; break;
            case 'Thu': weekDay='Per'; break;
            case 'Fri': weekDay='Cuma'; break;
            case 'Sat': weekDay='Cmt'; break;
            case 'Sun': weekDay='Paz'; break;
            default: console.log(" ");
        }
        switch(dates[1]){
            case 'Jan':  month='Oca'; break;
            case 'Feb':  month='Sub'; break;
            case 'Mar':  month='Mar'; break;
            case 'Apr':  month='Nis'; break;
            case 'May':  month='May'; break;
            case 'Jun':  month='Haz'; break;
            case 'Jul':  month='Tem'; break;
            case 'Agu':  month='Agu'; break;
            case 'Sep':  month='Eyl'; break;
            case 'Oct':  month='Eki'; break;
            case 'Nov':  month='Kas'; break;
            case 'Dec':  month='Ara'; break;
            default: console.log(" ");
    }
        let tarih = monthDay +' '+ month +' '+ year +' '+ weekDay;
        return tarih;
    }
    
    
    if(!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item component={Card} xs={12} md={3} className= {cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Bulaşan</Typography>
                        <Typography variant="h5">
                           <Countup start={0} end ={confirmed.value} duration={2.5} separator=","/> 
                        </Typography>
                        <Typography color="textSecondary">{turkishDate(modifiedDate)}</Typography>
                        <Typography variant="body2">Toplam Vaka Sayısı</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className= {cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>İyileşen</Typography>
                        <Typography variant="h5">
                           <Countup start={0} end ={recovered.value} duration={2.5} separator=","/> 
                        </Typography>
                        <Typography color="textSecondary">{turkishDate(modifiedDate)}</Typography>
                        <Typography variant="body2">Toplam İyileşen Sayısı</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className= {cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Ölüm</Typography>
                        <Typography variant="h5">
                           <Countup start={0} end ={deaths.value} duration={2.5} separator=","/> 
                        </Typography>
                        <Typography color="textSecondary">{turkishDate(modifiedDate)}</Typography>
                        <Typography variant="body2">Toplam Ölüm Sayısı</Typography>
                    </CardContent>
                </Grid>



            </Grid>
        </div>
    )
}
export default  Cards;