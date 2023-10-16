import styles from './Stoper.module.scss'

const Stopwatch  = ({ time }) => {

       const formatTime = (time) => {
        const totalSeconds = time / 1000;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const milliseconds = Math.floor((time % 1000));
    
        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    
        return formattedTime;
    };
 
   return (
     <div className={styles.component}>
        {formatTime(time)}
     </div>
   );
 
 };
 
 export default Stopwatch ;



