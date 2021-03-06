import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { history } from '../../App';
import { getTicketListApiAction } from '../../redux/Actions/TicketAction';
import { useSelector } from 'react-redux';

export default function BookingTicket(props) {
    const dispatch = useDispatch();
    const id = props.match.params.id;

    useEffect(async () => {
        dispatch(getTicketListApiAction(id))
    }, [])

    const { movieTimeId } = useSelector(state => state.TicketReducer);
    // const { thongTinPhim, danhSachGhe } = useSelector(state => state.TicketReducer.);

    // console.log(thongTinPhim, danhSachGhe);
    console.log(movieTimeId);

    const { thongTinPhim, danhSachGhe } = movieTimeId;

    const seatArr = [];

    console.log(thongTinPhim, danhSachGhe);

    const renderSeatList = () => {
        return danhSachGhe.map((seat, index) => {
            const classChosenSeat = '';
            const classUnChooseSeat = '';
            const classSeat = seat.loaiGhe === 'Vip' ? 'btn-outline-red' : 'btn-outline-success';
            const classOverNum = seat.stt.parstIn() >= 100 ? 'OverNum' : '';
            if (seat.daDat) {
                classChosenSeat = 'btn-dark';
            } else {
                classUnChooseSeat = 'btn-light';
            }

            return <button key={index} className={`${classSeat} ${classOverNum} ${classChosenSeat} ${classUnChooseSeat} `} onClick={() => {
                let seatChosen = {
                    giaVe: seat.giaVe,
                    loaiGhe: seat.loaiGhe,
                    tenGhe: seat.tenGhe,
                    maGhe: seat.maGhe
                }
                seatArr.push(seatChosen)
            }}>{seat.tenGhe}</button>
        })
    }


    return (
        <div className='row booking-ticket w-100'>
            <div className='col-8 p-4 room'>
                <div className='text-center mr-4' >
                    <p>screen</p>
                </div>
                <div className='btn-seat '>
                    {renderSeatList()}
                </div >
                <div className='btnInfo text-center'>
                    <button disabled className='btn btn-dark'></button><span className='ml-1 mr-5' >???? ch???n</span>
                    <button disabled className='btn btn-success'></button><span className='ml-1 mr-5'>??ang ch???n</span>
                    <button disabled className='btn btn-outline-success '></button><span className='ml-1 mr-5'>Th?????ng</span>
                    <button disabled className='btn btn-outline-danger '></button><span className='ml-1 mr-5'>VIP</span>
                </div>
            </div >
            <div className='col-4 container ticket '>
                <img src={thongTinPhim.hinhAnh} alt="" className='img-fluid' />
                <div className='row mt-4'>
                    <div className='col-6 text-bold'>R???p :</div>
                    <div className='col-6'>{thongTinPhim.tenCumRap}</div>
                </div>
                <div className='row mt-2'>
                    <div className='col-6 text-bold'>T??n :</div>
                    <div className='col-6 text-bold'>{thongTinPhim.tenPhim}</div>
                </div>
                <div className='row mt-2 text-bold'>
                    <div className='col-6'>Su???t Chi???u :</div>
                    <div className='col-6'>{thongTinPhim.gioChieu}</div>
                </div>
                <div className='row mt-2 '>
                    <div className='col-6 text-bold'>Ph??ng Chi???u :</div>
                    <div className='col-6'>{thongTinPhim.tenRap}</div>
                </div>
                <div className='row mt-2 '>
                    <div className='col-6 text-bold'>Gh??? :</div>
                    <div className='col-6'>
                        {seatArr.map((seat, index) => {
                            return <div className='row' key={index}>
                                <div className='col-6'>{seat.tenGhe}:{seat.loaiGhe}</div>
                                <div className='col-6'>{seat.giaVe}</div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='row mt-2 '>
                    <div className='col-6 text-bold'>T???ng :</div>
                    <div className='col-6'>{seatArr.reduce((total, seat, index) => {
                        return total += seat.giaVe
                    }, 0).toLocaleString()}</div>
                </div>
                <button className='btn btn-danger mt-3' onClick={() => {
                    console.log(
                        thongTinPhim.maLichChieu, seatArr.maGhe, seatArr.giaVe
                    );
                }}>Thanh to??n</button>
            </div>
        </div >
    )
}
