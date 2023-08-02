import React, { Fragment, useState } from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import './Courses.css'
import SchoolSlider from './SchoolSlider';


const Courses = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={'container'}>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}  style={{width: '80%'}}>
                <TabPanel header="Schools">
                    <SchoolSlider />
                </TabPanel>
                <TabPanel header="Under Graduate">
                    Content II
                </TabPanel>
                <TabPanel header="Executive Education">
                    Content III
                </TabPanel>
            </TabView>

        </div>
    )
}

export default Courses