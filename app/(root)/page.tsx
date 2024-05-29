import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Chike", 
    lastName: "Travis", 
    email: "contact@chiketravis300@gmail.com"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
              <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName|| 'Guest'}
              subtext = "Access and manage your user account and transactions efficiently."/>

            <TotalBalanceBox
            accounts ={[]}
            totalBanks={1}
            totalCurrentBalance={1250.50}/>
            </header>
            
           Recent Transactions 
            
        </div>

    <RightSidebar
    user={loggedIn}
    transactions={[]}
    banks={[{currentBalance: 1250},{currentBalance: 2089}]}
    />    
    </section>
  )
}

export default Home