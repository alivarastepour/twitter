import {Avatar} from "@mui/material";

const Tweet = ({who}) => {
    let shortForm:string ;
    let separated:string[] = who.split(' ') ;
    if (separated.length > 1)
        shortForm = who.split(' ')[0][0] + who.split(' ')[1][0]
    else
        shortForm = who[0]
    return <>
        <div className='tweetInput'>
            <div>
                <Avatar sx={{bgcolor: 'violet'}}>{shortForm.toUpperCase()}</Avatar>
            </div>
            <div>
                <input type="text"/>
            </div>
        </div>
    </>
}
export default Tweet;