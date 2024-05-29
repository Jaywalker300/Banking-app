
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'


const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className="total-balance-chart">
           <DoughnutChart accounts={accounts}/>
        </div>

        <div className="flex flex-col gap-6">
            <h2 className="header-2">
              Bank Accounts: {totalBanks}
            </h2>
        </div>

        <div className="flex flex-col gap-2">
            <p className="total-balance-label">
                Total current balance
            </p>

            <div className="total-balance-amount flex-center gap-2">
               <AnimatedCounter amount={totalCurrentBalance}/>
                
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox

// const number = 123456.789;

// const nigerianCurrencyFormat = new Intl.NumberFormat('en-NG', {
//   style: 'currency',
//   currency: 'NGN',
// });

// console.log(nigerianCurrencyFormat.format(number));
