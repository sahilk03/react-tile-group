import React from 'react';
import './styles.css';
import Tile from './Tile'
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.css';


WebFont.load({
    google: {
        families: ['Muli', 'Roboto', 'Helvetica', 'sans-serif', 'Arial']
    }
});


class TileGroup extends React.Component {
    render() {
        const { tiles } = this.props;
        return (
            <React.Fragment >
                {tiles.map((item, index) => (<Tile key={index} index={index} config={item} data={item.data || {}} />))}
            </React.Fragment>
        );
    }
}
export default TileGroup;
