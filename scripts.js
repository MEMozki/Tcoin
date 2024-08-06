document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        home: document.getElementById('home-section'),
        top: document.getElementById('top-section'),
        clans: document.getElementById('clans-section'),
        wallet: document.getElementById('wallet-section'),
    };

    document.getElementById('home').addEventListener('click', () => showSection('home'));
    document.getElementById('top').addEventListener('click', () => showSection('top'));
    document.getElementById('clans').addEventListener('click', () => showSection('clans'));
    document.getElementById('wallet').addEventListener('click', () => showSection('wallet'));

    document.getElementById('send-coin-btn').addEventListener('click', () => {
        alert('Send coin functionality not implemented');
    });

    document.getElementById('add-wallet-btn').addEventListener('click', () => {
        const walletAddress = document.getElementById('add-wallet').value;
        if (walletAddress) {
            alert(`Wallet ${walletAddress} added`);
        } else {
            alert('Please enter a wallet address');
        }
    });

    function showSection(section) {
        for (let key in sections) {
            sections[key].style.display = (key === section) ? 'block' : 'none';
        }
    }
});
