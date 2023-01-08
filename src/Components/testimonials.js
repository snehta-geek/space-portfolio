import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../Assets/Styles/template.scss"
import Pagination from 'rc-pagination';
import locale from 'rc-pagination/es/locale/en_US';


const Testimonials = () => {
    const [feedbackDetails, setFeedbackDetails] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage, setDataPerPage] = useState(1)
    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        getTestimonialsData()
    }, [])

    /* Fetching Data through API */
    const getTestimonialsData = async () => {
        const res = await axios.get('https://naseers819.wixsite.com/website-5/_functions/webpageTestimonials')
        if (res && res.data?.length > 0) {
            setFeedbackDetails(res.data)
            setShowLoader(false)
        }
    }
    const onPageChange = (pageIndex, pageSize) => {
        setCurrentPage(pageIndex)
    }
    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i class="fa fa-angle-left" aria-hidden="true"></i></button>;
        }
        if (type === 'next') {
            return <button><i class="fa fa-angle-right" aria-hidden="true"></i></button>;
        }
        return originalElement;
    }

    /*Handler for Displaying Data based on the pagination */
    const getFeedbackData = () => {
        let indexOfLastData = currentPage * dataPerPage;
        let indexOfFirstData = indexOfLastData - dataPerPage;
        return feedbackDetails.slice(indexOfFirstData, indexOfLastData)
    }
    return (
        <div className='testimonials-middle-section'>
            <div className='Testimonial-title'>
                Testimonials
            </div>
            <div className='cards'>
                {showLoader ?
                    <>
                        <div className='loader'></div>
                    </>
                    :
                    <>
                        {getFeedbackData().map(val => (
                            <div className='feedback-card' style={val.id === 1 ? { backgroundColor: "rgb(237 220 208)" } : val.id === 2 ? { backgroundColor: "#FFAB74" } : { backgroundColor: "#FABED7" }}>
                                <div className='feedback'>
                                    {val.message}
                                </div>
                                <div className='user-details'>
                                    <div className='avatar'>
                                        <img src={val.avatar} width="81px" height="85px" />
                                    </div>
                                    <div className='name-role'>
                                        <div className='name'>{val.name}</div>
                                        <div className='design'>{val.designation}</div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </>
                }

            </div>
            <div className='pagination'>
                <Pagination
                    current={currentPage}
                    pageSize={1}
                    showSizeChanger
                    locale={locale}
                    total={3}
                    onChange={onPageChange}
                    itemRender={PrevNextArrow}
                    className="pagination-data"
                />
            </div>
        </div>
    )
}

export default Testimonials