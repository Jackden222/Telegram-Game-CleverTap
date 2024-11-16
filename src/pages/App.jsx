
import React, { useState, useEffect } from 'react';
import BottomNavigation from '../components/ui/BottomNavigation.jsx'
import '../main.css';



const Home = () => {
  const levelNames = [
    "Bronze",    // From 0 to 4999 coins
    "Silver",    // From 5000 coins to 24,999 coins
    "Gold",      // From 25,000 coins to 99,999 coins
    "Platinum",  // From 100,000 coins to 999,999 coins
    "Diamond",   // From 1,000,000 coins to 2,000,000 coins
    "Epic",      // From 2,000,000 coins to 10,000,000 coins
    "Legendary", // From 10,000,000 coins to 50,000,000 coins
    "Master",    // From 50,000,000 coins to 100,000,000 coins
    "GrandMaster", // From 100,000,000 coins to 1,000,000,000 coins
    "Lord"       // From 1,000,000,000 coins to ∞
  ];

  const levelMinPoints = [
    0,        // Bronze
    5000,     // Silver
    25000,    // Gold
    100000,   // Platinum
    1000000,  // Diamond
    2000000,  // Epic
    10000000, // Legendary
    50000000, // Master
    100000000,// GrandMaster
    1000000000// Lord
  ];

  // Custom upgrade costs for each level
  const multiTapCostLevels = [100, 400, 700, 1200, 1600, 3200, 6400, 12800, 25600, 51200];
  const energyLimitCostLevels = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];
  const rechargingSpeedCostLevels = [50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];

  const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(4990);
  const [energy, setEnergy] = useState(500); // Starting energy
  const [showModal, setShowModal] = useState(false); // Modal state
  const [multiTapLevel, setMultiTapLevel] = useState(0);
  const [energyLimitLevel, setEnergyLimitLevel] = useState(0);
  const [rechargingSpeedLevel, setRechargingSpeedLevel] = useState(0);
  const [maxEnergy, setMaxEnergy] = useState(500);
  const [multiTapCost, setMultiTapCost] = useState(multiTapCostLevels[multiTapLevel]);
  const [energyLimitCost, setEnergyLimitCost] = useState(energyLimitCostLevels[energyLimitLevel]);
  const [rechargingSpeedCost, setRechargingSpeedCost] = useState(rechargingSpeedCostLevels[rechargingSpeedLevel]);

  // Compute points to add based on Multi Tap level
  const pointsToAdd = multiTapLevel + 1;

    const handleCardClick = (e) => {
    if (energy > 0) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
      setTimeout(() => {
        card.style.transform = '';
      }, 100);

      setPoints(points + pointsToAdd); // Increase points based on Multi Tap level
      setEnergy(energy - 3); // Energy cost per click

      // Add new click to the array for animation
      setClicks(prevClicks => [
        ...prevClicks,
        { id: Date.now(), x: e.clientX, y: e.clientY }
      ]);
    }
  };

  

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Modal open/close handlers
  const toggleModal = () => setShowModal(!showModal);

  // Progress bar calculation
  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress = ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  // Level progression
  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex]);

  // Energy regeneration with recharging speed modifier
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy(prevEnergy => Math.min(prevEnergy + 1, maxEnergy)); // Regenerate 1 energy per second
    }, 1000 - rechargingSpeedLevel * 100); // Speed up recharge by 100ms per level
    return () => clearInterval(interval);
  }, [maxEnergy, rechargingSpeedLevel]);

  // Upgrade functions
  const upgradeMultiTap = () => {
    if (multiTapLevel < 10 && points >= multiTapCost) {
      setPoints(points - multiTapCost);
      setMultiTapLevel(multiTapLevel + 1);
      setMultiTapCost(multiTapCostLevels[multiTapLevel + 1]); // Set next cost
    }
  };

  const upgradeEnergyLimit = () => {
    if (energyLimitLevel < 10 && points >= energyLimitCost) {
      setPoints(points - energyLimitCost);
      setEnergyLimitLevel(energyLimitLevel + 1);
      setMaxEnergy(maxEnergy + 500); // Increase energy limit by 500
      setEnergyLimitCost(energyLimitCostLevels[energyLimitLevel + 1]); // Set next cost
    }
  };

  const upgradeRechargingSpeed = () => {
    if (rechargingSpeedLevel < 10 && points >= rechargingSpeedCost) {
      setPoints(points - rechargingSpeedCost);
      setRechargingSpeedLevel(rechargingSpeedLevel + 1);
      setRechargingSpeedCost(rechargingSpeedCostLevels[rechargingSpeedLevel + 1]); // Set next cost
    }
  };

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-[#1a1c32] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-10">
          {/* Header and Level Information */}
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#1d2025]">
              <img className='justify-between items-center m-auto' src="/binance-logo.png" alt="/" width={24} height={24}/>
            </div>
            <div>
              <p className="text-sm">Alex (CEO)</p>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-4 mt-1">
            <div className="flex items-center w-1/3">
              <div className="w-full">
                <div className="flex justify-between">
                  <p className="text-sm">{levelNames[levelIndex]}</p>
                  <p className="text-sm">{levelIndex + 1} <span className="text-[#95908a]">/ {levelNames.length}</span></p>
                </div>
                <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div className="progress-gradient h-2 rounded-full" style={{ width: `${calculateProgress()}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center w-1/3 h-[32px] border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-24">
              <img src="/binance-logo.png" alt="/" className="w-6 h-6 mr-2" />
              <button onClick={handleOpenModal}>
                <img className="justify-between items-center w-6 h-6 ml-2" src="/setting.png" alt="" width={24} height={24}/>
              </button>
            </div>
          </div>

          {/* Points and Energy */}
          <div className="px-4 mt-4 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <img src="/clever.png" alt="/" className="w-10 h-10" />
              <p className="text-4xl text-white">{points.toLocaleString()}</p>
            </div>
          </div>

          <div className="px-1 mt-4 flex justify-center">
            <div className="w-80 h-80 p-4 rounded-full circle-outer" onClick={handleCardClick}>
              <div className="w-full h-full rounded-full circle-inner">
                <img src="/clever.png" alt="/" className="w-full h-full" />
              </div> 
            </div>

            

            <div className="flex flex-col space-y-6 fixed bottom-[120px] left-0 right-0 justify-center items-center px-5">
              <div className='flex bg-[#1f2942]/30 border border-gray-500/10 rounded-full w-1/4 h-10 justify-center items-center'>
                <div>
                  <button className='flex' onClick={toggleModal}><img src="/rocket.png" alt="rocket" className='mr-1' width={20} height={20}/>Boost</button>
                </div>
              </div>
              <div className="flex flex-col w-full items-center justify-center">
                <div className="flex pb-[6px] space-x-1 items-center justify-center text-[#fff]">
                  <img src="/clever.png" alt="/" className="w-[20px]" />
                  <div>
                    <span className="text-[18px] font-bold">{energy}</span>
                    <span className="text-[14px] font-medium">/ {maxEnergy}</span>
                  </div>
                </div>
                <div className="flex w-full p-[4px] h-[20px] items-center bg-energybar rounded-[12px] border-[1px] border-borders2">
                  <div className="bg-orange-300/80 h-full rounded-full transition-width duration-100" style={{ width: `${(energy / maxEnergy) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation />
      </div>
      

      {/* Modal for Boost/Upgrades */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#1a1c32] rounded-xl p-6 w-full mx-4 h-[350px]">
            
            <button onClick={upgradeMultiTap} className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center w-full'>
              <div className='flex flex-1 items-center space-x-2'>
                <div>
                  <img src="/tap.png" alt="/" className='w-[35px]' />
                </div>
                <div className='flex flex-col space-y-1 text-left'>
                  <span className='font-semibold text-[17px]'>Multitap</span>
                  <div className='flex items-center space-x-1'>
                    <span className='w-[20px] h-[20px]'>
                      <img src="/clever.png" alt="/" className='w-full' />
                    </span>
                    <span className='font-medium flex items-center'>
                      <span className='text-[15px]'><span>{multiTapCost}</span> points</span>
                      <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                      <span className='text-[#9a96a6] text-[15px]'>Level: <span>{multiTapLevel}</span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src="/chevron.png" alt="/" width={20} height={20} />
              </div>
            </button>

            <button onClick={upgradeEnergyLimit} className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center w-full mt-2'>
              <div className='flex flex-1 items-center space-x-2'>
                <div>
                  <img src="/energy.png" alt="/" className='w-[35px]' />
                </div>
                <div className='flex flex-col space-y-1 text-left'>
                  <span className='font-semibold text-[17px]'>Energy Limit</span>
                  <div className='flex items-center space-x-1'>
                    <span className='w-[20px] h-[20px]'>
                      <img src="/clever.png" alt="/" className='w-full' />
                    </span>
                    <span className='font-medium flex items-center'>
                      <span className='text-[15px]'><span>{energyLimitCost}</span> points</span>
                      <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                      <span className='text-[#9a96a6] text-[15px]'>Level: <span>{energyLimitLevel}</span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src="/chevron.png" alt="/" width={20} height={20} />
              </div>
            </button>

            {/* Recharging Speed Upgrade */}
            <button onClick={upgradeRechargingSpeed} className='bg-[#1f2942] opacity-100 bg-cards rounded-[10px] px-[14px] py-[8px] flex justify-between items-center w-full mt-2'>
              <div className='flex flex-1 items-center space-x-2'>
                <div>
                  <img src="/flash.png" alt="/" className='w-[35px]' />
                </div>
                <div className='flex flex-col space-y-1 text-left'>
                  <span className='font-semibold text-[17px]'>Recharging Speed</span>
                  <div className='flex items-center space-x-1'>
                    <span className='w-[20px] h-[20px]'>
                      <img src="/clever.png" alt="/" className='w-full' />
                    </span>
                    <span className='font-medium flex items-center'>
                      <span className='text-[15px]'><span>{rechargingSpeedCost}</span> points</span>
                      <span className='bg-[#bdbdbd] w-[1px] h-[13px] mx-2'></span>
                      <span className='text-[#9a96a6] text-[15px]'>Level: <span>{rechargingSpeedLevel}</span></span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src="/chevron.png" alt="/" width={20} height={20} />
              </div>
            </button>

            <button onClick={toggleModal} className="mt-4 bg-[#1f2942] text-white px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default Home;
