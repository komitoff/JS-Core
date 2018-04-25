let receiptService = (() => {

  function getReceiptById(userId, active) {
    const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"${active}"}`;
    remote.get('appdata', endpoint, 'kinvey');
  }

  function createReceipt(active, productCount, total) {
    const endpoint = `receipts`;
    let data = { active, productCount, total };
    remote.post('appdata', endPoint, 'kinvey', data);
  }

  function getMyReceipts(userId) {
    const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;
    remote.get('appdata', endpoint, 'kinvey');
  }

  return {
    getReceiptById,
    createReceipt,
    getMyReceipts
  }
})();