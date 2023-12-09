document.addEventListener('DOMContentLoaded', function () {
  const ebayApiUrl = 'https://api.ebay.com/buy/browse/v1/item_summary/search?limit=5&category_ids=29799';
  const ebayAppId = 'CarleneM-Bestsell-PRD-646153519-daf8fdc9'; // Replace with your eBay App ID

  fetch(ebayApiUrl, {
    headers: {
      'Authorization': `Bearer ${ebayAppId}`
    }
  })
  .then(response => response.json())
  .then(data => {
    const bestSellers = data.itemSummaries.map(item => {
      return `<div>
                <img src="${item.image.thumbnailUrl}" alt="${item.title}" />
                <p>${item.title}</p>
                <p>Price: ${item.price.value} ${item.price.currency}</p>
              </div>`;
    }).join('');

    document.getElementById('bestSellers').innerHTML = bestSellers;
  })
  .catch(error => {
    console.error('Error fetching eBay best sellers:', error);
  });
});
