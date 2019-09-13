import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tooltip from '@material-ui/core/Tooltip';
import CloseSearch from '@material-ui/icons/Close'
import AccountCircle from '@material-ui/icons/AccountCircle';
import GridIcon from '../assets/images/gridView.svg'
import ListIcon from '../assets/images/listview.svg'
import PersistentDrawerLeft from './Drawer';

class PrimarySearchAppBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: '',
            searchInput: '',
            listView: false,
            openDrawer: false,
            
                       
        }
        this.searchInputHandler = this.searchInputHandler.bind(this)
        this.handleCloseSearch = this.handleCloseSearch.bind(this)
    }
    searchInputHandler = event => {
        const searchInput = event.target.value;
        this.setState({ searchInput: searchInput })
        this.props.searchInput(this.state.searchInput)
    }
    async handleCloseSearch() {
        await this.setState({
            searchInput: ''
        })
        this.props.searchInput(this.state.searchInput)
    }
 
    handleView=()=>{
        this.setState({
            listView:!this.state.listView
        })
        this.props.changeGrid()
    }


    handleDrawerOpen = () => {
        this.setState({ openDrawer: !this.state.openDrawer });
    };

    render() {

        let viewIcon =GridIcon
        if(this.state.listView){
            viewIcon = ListIcon
        }
return (    
    <div className="app-bar">
        <AppBar position="fixed" color="default">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <div className="fundoo-image-text">
                    <div>
                        <img src={require('../assets/images/keep.png')} alt="" />
                    </div>
                    <div className="title" variant="h6" color="initial" nowrap="true">
                        FundooNotes
                        </div>
                </div>
                <div className="search">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <div className="searchInput">
                        <InputBase
                            placeholder='Search'
                            value={this.state.searchInput}
                            onChange={this.searchInputHandler}
                            id="searchInputBase"
                        />
                    </div>
                    <div>
                        <IconButton>
                            <Tooltip title="Close Search" >
                                <CloseSearch onClick={this.handleCloseSearch} />
                            </Tooltip>
                        </IconButton>
                    </div>

                    </div>
                    <div className="noteView">
                    {/* {
                        this.state.showMe
                        ? <div onClick={this.handleView}><img style={{height:20,width:20}}     src={require("../assets/images/listview.svg")} alt="list"/></div> 
                        : <div onClick={this.handleView}><img src={require("../assets/images/gridview.svg")} alt="grid"/></div>
                        
                    } */}
                    <img style={{height:20,width:20}} onClick={this.handleView} src={viewIcon} alt="list"/>
                    </div>
                    <div  className="profileIcon">
                    <IconButton color="default">
                        <AccountCircle onClick={this.handleProfileMenuOpen} />
                    </IconButton>
                    </div>
                    

            </Toolbar>
        </AppBar>
        <PersistentDrawerLeft
           getTrashedNotes={this.props.getTrashedNotes}
            open={this.state.openDrawer}
        />


    </div>
        );
    }
}

export default PrimarySearchAppBar
