import React from "react";
import Radium from "radium";
import { css, PropTypes } from "js-util/react";
import Value from "./Value";
import moment from "moment";


/**
 * A list item within the output log.
 */
@Radium
export default class OutputItem extends React.Component {
  styles() {
    return css({
      base: {
        fontSize: 14
      },
      td: {
        borderBottom: "dashed 1px rgba(0, 0, 0, 0.1)",
        padding: 6,
      },
      left: {
        width: 110
      }
    });
  }

  render() {
    const styles = this.styles();
    let { time, values } = this.props;

    values = values.map((value, i) => {
      return <Value key={i}>{ value }</Value>
    });


    return (
      <tr style={ styles.base }>
        <td style={[ styles.td, styles.left ]}>
          <Value color="grey">{ moment(time).format("h:mm:ss:SSSS") }</Value>
        </td>
        <td style={[ styles.td, styles.right ]}>
          <Value color="red">{ values }</Value>
        </td>
      </tr>
    );
  }
}

// API -------------------------------------------------------------------------
OutputItem.propTypes = {
  time: PropTypes.instanceOf(Date),
  values: PropTypes.array,
};
OutputItem.defaultProps = {
  value: []
};