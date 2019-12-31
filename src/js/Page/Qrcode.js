import React, {Component} from 'react';
import QRCode from 'qrcode-react'

class Qrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defalut : "TWQRP://個人轉帳/158/02/V1?",
      account : "0051548601126500",
      bank : "009",
    }
  }
  numJewelsInStones(J, S) {
    
  }
  render() {
    /** Tim-台新 */
    let a = "TWQRP://個人轉帳/158/02/V1?D6=0028881001686314&D5=812&D10=901";
    let result = "TWQRP://個人轉帳/158/02/V1?D6=0020992000083641&D5=806&D10=901";
    let b = "TWQRP://個人轉帳/158/02/V1?D6=0000182200383948&D5=008&D10=901";

    /** 薇薇安-台銀 */
    let c = "TWQRP://個人轉帳/158/02/V1?D6=0000250004373979&D5=004&D10=901";

    /** KEN- */
    let d = "TWQRP://個人轉帳/158/02/V1?D6=0001773048112802&D5=700&D10=901";
    return (
      <div>
        <QRCode value={encodeURIComponent(a)}/>

      </div>
    )
  }
}

export default Qrcode;