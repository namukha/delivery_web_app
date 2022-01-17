import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../css/modal.css'
function TestModal(props) {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        props.showHandler(false);
    }
    const handleShow = () => setShow(true);
    let price = props.data.sales ? <div className='d-flex'><div className="modalPrice">{new Intl.NumberFormat().format(props.data.price - props.data.price * props.data.percent / 100)}₮ </div><strike className="strike-dark">{new Intl.NumberFormat().format(props.data.price)}₮ </strike> </div> : <div className='modalPrice'>{props.data.price}</div>
    return (
        <>
            <Modal dialogClassName="modal-dialog" show={show} onHide={handleClose} centered>
                <div className=' my-modal '>
                    <img className='modalimg' src={props.data.img} alt=""
                    />
                    <div className='modalMain'>
                        <div className='modalContent row '>
                            <div className='NameAndPrice'>
                                <div className='modalHeader'>{props.data.name}</div>
                                {price}
                            </div>
                            <div>
                                <h5 className='modalHeader'>Орц</h5>
                                <p className='modalIngredients'>{props.data.ingredients}</p>
                            </div>
                            <div>
                                <h5 className='modalHeader'>Хэмжээ</h5>
                                <div className='modalSizeButtons'>
                                    <button className='sizeButton  activeButton '>1 хүн</button>
                                    <button className='sizeButton '>2 хүн</button>
                                </div>
                            </div>
                            <div>
                                <h5 className='modalHeader'>Тоо</h5>
                                <div className='modalCounterButtons'>
                                    <button className='counterButton '>-</button>
                                    <p className='counterNumber '>1</p>
                                    <button className='counterButton '>+</button>
                                </div>
                            </div>
                            <button className='orderButton'>Захиалах</button>
                        </div>
                    </div>
                    <button className='closeButton' onClick={handleClose}>x</button>
                </div>
            </Modal>
        </>
    );
}
export default TestModal
