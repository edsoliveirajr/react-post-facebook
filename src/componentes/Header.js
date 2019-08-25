import React from 'react';

function Header() {
  return (
    <div className="header">
      <div>
        <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47155 23.747H7.3674V11.8951H10.6341L11.0667 7.81145H7.3674L7.37356 5.76738C7.37356 4.70225 7.4743 4.13135 9.00216 4.13135H11.0443V0.0465679H7.77707C3.85277 0.0465679 2.47211 2.02739 2.47211 5.35935V7.81201H0.0252962V11.8957H2.47155V23.747ZM46.3608 11.2593C44.698 11.2593 44.3186 12.1722 44.3186 13.3028V13.9381H48.4007V13.3028C48.4007 12.1722 48.0213 11.2593 46.3608 11.2593ZM62.2762 11.6712C61.2778 11.6712 60.5581 11.9987 59.8283 12.3322V19.8805C60.5273 19.9471 60.928 19.9471 61.5912 19.9471C63.9877 19.9471 64.3162 18.8495 64.3162 17.317V13.7119C64.3162 12.5802 63.9406 11.6712 62.2762 11.6712ZM16.8827 20.4749C15.9514 20.4749 15.5294 20.0104 15.5294 19.116C15.5294 18.2165 15.9838 18.024 17.0181 18.024H19.2024V19.8145C19.1319 19.8469 19.0626 19.8792 18.9941 19.9111C18.3549 20.2092 17.785 20.4749 16.8827 20.4749ZM77.758 11.6712C76.0924 11.6712 75.5154 12.5802 75.5154 13.7119V17.8421C75.5154 18.9766 76.0924 19.8884 77.758 19.8884C79.419 19.8884 80.0005 18.9766 80.0005 17.8421V13.7119C79.9999 12.5802 79.4184 11.6712 77.758 11.6712ZM24.0994 23.7778H20.019L19.8427 22.7457C17.9796 23.7778 16.3168 23.9451 15.2199 23.9451C12.2274 23.9451 10.6347 21.9459 10.6347 19.1809C10.6347 15.9189 12.4933 14.7547 15.8182 14.7547H19.2024V14.0494C19.2024 12.3843 19.0116 11.8957 16.4512 11.8957H12.2649L12.674 7.81201H17.2498C22.8676 7.81201 24.0994 9.58686 24.0994 14.0825V23.7778ZM33.4848 11.6639C34.7065 11.6639 35.4358 11.7597 37.9749 12.1951V8.21388C35.7508 7.71294 34.3019 7.58141 33.0774 7.58141C27.8211 7.58141 25.7319 10.3509 25.7319 14.3478V17.2085C25.7319 21.202 27.8211 23.9664 33.0774 23.9664C34.3019 23.9664 35.7508 23.8354 37.9749 23.3367V19.3533C35.4358 19.7904 34.7065 19.8878 33.4848 19.8878C31.2904 19.8878 30.6272 19.4014 30.6272 17.5376V14.0119C30.6272 12.1481 31.2904 11.6639 33.4848 11.6639ZM53.296 17.2085H44.318V17.5376C44.318 19.4014 44.9818 19.8878 47.1756 19.8878C49.1479 19.8878 50.3517 19.7904 52.8863 19.3533V23.3367C50.4418 23.8354 49.168 23.9664 46.7699 23.9664C41.513 23.9664 39.4227 21.202 39.4227 17.2085V13.9375C39.4227 10.4432 40.9735 7.58141 46.3602 7.58141C51.7469 7.58141 53.296 10.4102 53.296 13.9375V17.2085ZM61.4256 23.9591C68.1078 23.9591 69.2109 21.1438 69.2109 17.284H69.2104V13.3033C69.2104 9.7766 68.3949 7.58197 63.5002 7.58197C62.2544 7.58197 60.8855 7.78179 59.8277 8.1747V0.456837L54.9336 1.27346V23.3373C57.597 23.747 59.0123 23.9591 61.4256 23.9591ZM84.8997 17.368C84.8997 20.6977 83.5252 23.9272 77.7742 23.9272C72.0204 23.9272 70.6201 20.6977 70.6201 17.368V14.153C70.6201 10.8216 72.0204 7.59149 77.7742 7.59149C83.5252 7.59149 84.8997 10.8216 84.8997 14.153V17.368ZM93.4518 23.9272C99.2017 23.9272 100.578 20.6977 100.578 17.368V14.153C100.578 10.8216 99.2017 7.59149 93.4518 7.59149C87.698 7.59149 86.2977 10.8216 86.2977 14.153V17.368C86.2977 20.6977 87.698 23.9272 93.4518 23.9272ZM116.667 23.747H111.362L106.876 16.2564V23.747H101.98V1.2729L106.876 0.456277V14.9243L111.362 7.81201H116.667L111.769 15.5735L116.667 23.747ZM91.1953 13.7119C91.1953 12.5802 91.7723 11.6712 93.435 11.6712C95.0955 11.6712 95.6831 12.5802 95.6831 13.7119V17.8421C95.6831 18.9766 95.0955 19.8884 93.435 19.8884C91.7723 19.8884 91.1953 18.9766 91.1953 17.8421V13.7119ZM119.462 20.9518C120.286 20.9518 120.943 21.624 120.943 22.4636C120.943 23.316 120.286 23.981 119.456 23.981C118.63 23.981 117.96 23.316 117.96 22.4636C117.96 21.624 118.63 20.9518 119.456 20.9518H119.462ZM118.248 22.4636C118.248 21.7584 118.791 21.1869 119.456 21.1869H119.462C120.132 21.1869 120.668 21.7589 120.668 22.4703C120.668 23.1817 120.132 23.7526 119.462 23.7459C118.792 23.7459 118.248 23.1817 118.248 22.4636ZM119.174 23.3435H118.905V21.6565L118.919 21.6546C119.055 21.6357 119.187 21.6173 119.382 21.6173C119.637 21.6173 119.804 21.671 119.907 21.7444C120.006 21.8188 120.059 21.9324 120.059 22.0931C120.059 22.3158 119.912 22.4496 119.731 22.5039V22.5168C119.879 22.5442 119.979 22.6774 120.013 22.9254C120.052 23.1879 120.093 23.288 120.119 23.3429H119.838C119.798 23.288 119.757 23.1341 119.724 22.9119C119.684 22.6975 119.576 22.617 119.361 22.617H119.175V23.3435H119.174ZM119.369 22.4099H119.174V21.8378C119.22 21.8317 119.281 21.825 119.369 21.825C119.67 21.825 119.777 21.9722 119.777 22.1199C119.777 22.3287 119.589 22.4099 119.369 22.4099Z" fill="white"/>
        </svg>
      </div>
      <div className='profile'>
        <span>Meu perfil</span>
        <i className='material-icons'>account_circle</i>
      </div>
    </div>
  );
}

export default Header;
