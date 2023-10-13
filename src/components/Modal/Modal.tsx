import React, {useEffect, useRef} from 'react'
import ReactDOM from 'react-dom';
import s from './Modal.module.scss';

type TModal = {
    onCloseModal?: () => void;
    children: React.ReactNode;
    padding?: string;
};

export const Modal = ({
                          children,
                          onCloseModal,
                          padding = '4.62vh 6.19vw',

                      }: TModal) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        document.body.style.overflow = 'auto';
        if (onCloseModal) onCloseModal();
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as HTMLDivElement)
            ) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div className={s.overlap}/>
            <div
                ref={modalRef}
                style={{padding: `${padding}`}}
                className={s.modal_container}>
                <div>{children}</div>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};
