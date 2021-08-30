import { Box, Button, CircularProgress, Container, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SingleWorkshopCard from './SingleWorkshopCard'
import Styles from './_WorkshopBlock.module.css'
import workShopsData from '../../../../public/assets/json_data/workshop_data.json'
import myWorkshop from '../../../../public/assets/json_data/myWorkshop_data.json'
import axios from 'axios'
import CheckHelper from 'src/shared/_Helper/check.helper'
import Loader from 'src/Components/UI/Spinner/Loader/Loader'
import TopBarWorkShop from './TopBarWorkShop'
const WorkshopsBlock = () => {
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [workShops, setWorkShops] = useState([])
    const fetchData = async () => {

    }
    useEffect(() => {
        setTimeout(() => {
            setWorkShops(workShopsData)
        }, 2000)

    }, [])
    const onClickMyWork = (btnId) => {

        setValue(btnId)
        setWorkShops(myWorkshop)
    }
    const onClickWork = (btnId) => {

        setValue(btnId)
        setWorkShops(workShopsData)
    }
    const [showTopSection, setShowTopSection] = useState(true)
    const onCloseSection = () => {
        setShowTopSection(false)
    }
    return (
        <section
            className="sectionWrap"
        >
            <Container>

                <div className="topSection">
                    <Typography className="sectionTitle" variant="h2" paragraph>
                        Workshops
                    </Typography>

                    <div className="tabMenu" >
                        <Button id="2"
                            onClick={(e) => onClickWork("2", e)} variant={value == 2 ? "contained" : "text"}
                            style={{

                                marginRight: 10
                            }}
                            classes={
                                { root: value == 2 ? Styles.btnSelected : Styles.btnNotSelected }
                            }
                        > <span style={{ fontFamily: "Poppins-Medium" }}>Discover</span> </Button>
                        <Button

                            // style={{ backgroundColor: "transparent" }}
                            classes={
                                { root: value == 1 ? Styles.btnSelected : Styles.btnNotSelected }
                            }
                            variant={value == 1 ? "contained" : "text"} onClick={() => onClickMyWork("1")}><span style={{ fontFamily: "Poppins-Medium" }}>My Workshop</span> </Button>
                    </div>
                </div>
                {showTopSection && <TopBarWorkShop onClose={onCloseSection} customClass={Styles} />}

                <div className="cardSection">
                    <Grid container direction="row"
                        justifyContent="space-between"
                        spacing={5}
                    >
                        {CheckHelper.hasArrayItem(workShops) ?
                            workShops.map(workshop => <Grid key={workshop.id} item sm={6} md={4}>
                                <SingleWorkshopCard data={workshop} customClass={Styles} />
                            </Grid>) : <Loader />
                        }



                    </Grid>
                </div>
            </Container>
        </section>
    )
}

export default WorkshopsBlock
