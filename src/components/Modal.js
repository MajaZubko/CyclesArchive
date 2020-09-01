import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="modal-background">
			<div onClick={(e) => e.stopPropagation()} className="modal-inside">
				<div className="header">{props.title}</div>
				<div className="content">{props.content}</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
