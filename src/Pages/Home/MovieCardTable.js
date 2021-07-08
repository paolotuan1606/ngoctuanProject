import React from 'react'
import { TabPanel, Tab, TabList, Tabs } from 'react-tabs';
import { NavLink } from 'react-router-dom';

export default function MovieCardTable(props) {
    const { logo, lstCumRap } = props.cumRap;

    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const renderCinemaGroup = () => {
        return (
            <Tabs className="tab-table" >
                <TabList  >
                    {lstCumRap.map((cinema, index) => {
                        return (
                            <Tab key={index} style={{}}>
                                <div>
                                    <img src={logo} alt={logo} className="img" style={{ width: 30, height: 30 }} />
                                    <div >
                                        <p style={{ fontSize: 15, width: 100 }}>{cinema.tenCumRap}</p>

                                    </div>
                                </div>
                            </Tab>
                        )
                    })}
                </TabList>
                <div className="listMovie">
                    {lstCumRap.map((movie) => {
                        const { danhSachPhim } = movie;

                        return (
                            <TabPanel key={movie.tenCumRap} className='d-inline-block'>
                                {
                                    danhSachPhim.map((phim, index) => {
                                        return (
                                            <div key={index} className='d-inline-block cardTable mb-3 ml-3' style={{ width: 200, }} >
                                                <div expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                    <div className="" >
                                                        <div className="card text-left" >
                                                            <img className="card-img-top img-fluid" style={{ height: 180, }} src={phim.hinhAnh} alt={phim.hinhAnh} />
                                                            <div className="card-body" style={{ padding: 10, height: 80 }}>
                                                                <p className="card-title pt-2" style={{ fontSize: 14 }} >{phim.tenPhim}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-start">
                                                        <h5 className="text-center">2D Digital</h5>
                                                        <div className="lichCHieu">
                                                            <div className="btnMovie" variant="contained" target="_blank">
                                                                <div className="dropdown" >
                                                                    <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                                                                        Lịch chiếu
                                                                    </button>
                                                                    <div className="dropdown-menu" style={{ height: 150, msOverflowY: 'auto' }}>
                                                                        {phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                                            return (
                                                                                <NavLink key={index} className="dropdown-item text-dark bg-light" to={`/booking-ticket/${lichChieu.maLichChieu}`}>{lichChieu.ngayChieuGioChieu}</NavLink>
                                                                            )
                                                                        })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                        )
                                    })
                                }
                            </TabPanel >
                        )
                    })
                    }

                </div >
            </Tabs >
        )
    }
    return (
        <div>
            {renderCinemaGroup()}
        </div>
    )
}
