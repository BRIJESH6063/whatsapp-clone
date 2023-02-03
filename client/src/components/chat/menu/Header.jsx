import { useContext , useState } from 'react' ;
import { AccountContext } from '../../../context/AccountProvider';
import { Chat as MessageIcon } from '@mui/icons-material';
import { styled, Box } from '@mui/material'

// Components 
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
    height : 44px ;
    background : #ededed ;
    padding : 8px 16px ;
    display: flex;
    align-items: center ;
` ;

const Wrapper = styled(Box)`
    margin-left : auto ;
    & > * {
        margin-left : 2px ;
        padding : 8px ;
        color : #000 ;
    }
    & : first-child {
        font-size : 22px ;
        margin-right : 8px ;
        margin-top: 3px ;
    }
` ;

const Image = styled('img')({
    height : 38,
    width : 38 ,
    borderRadius: '50%'
})

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext) ;

    const toggleDrawer =() =>{
        setOpenDrawer(true);
    }
    return(
        <>
            <Component>
                <Image src = {account.picture} alt = "dp" onClick={() => toggleDrawer()} />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header ;