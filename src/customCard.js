import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class CustomCard extends React.Component {

    render() {
        const { config, index } = this.props;
        return (
            <Card style={styles.card}>
                <CardContent id={"customCardContent_" + index}>
                </CardContent>
            </Card>
        );
    }
    componentDidMount() {
        const { config: { content }, index } = this.props;
        document.getElementById("customCardContent_" + index).innerHTML = content;
    }
}
export default CustomCard;