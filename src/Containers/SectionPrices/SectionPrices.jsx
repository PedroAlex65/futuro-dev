

import TablePrices from '../../Components/TablePrices/TablePrices';
import './SectionPrices.css'
const SectionPrices = () => {
  return (
    <section className='section-prices'>
      <div className="container-prices">
        <h1>NOSSOS PLANOS</h1>
        <div className="table-prices">
           <TablePrices/>
        </div>
      </div>
    </section>
  );
};

export default SectionPrices;
