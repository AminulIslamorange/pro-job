import React from 'react';
import ExperiencedJobs from '../../components/ExperiencedJobs/ExperiencedJobs';
import FresherJobs from '../../components/FresherJobs/FresherJobs';
import ItCompany from '../../components/ItCompany';
import JobTrogle from '../../components/JobTrogle/JobTrogle';
import TopHero from '../../components/TopHero';

const Home = () => {
    return (
        <div>
           <TopHero></TopHero>
           <JobTrogle/>
           <FresherJobs/>
           <ExperiencedJobs/>
           <ItCompany></ItCompany>
        </div>
    );
};

export default Home;