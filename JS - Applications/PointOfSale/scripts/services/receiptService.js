let receiptService = (() => {
  'use strict';

  function getReceiptById(userId) {
    const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  function createReceipt(active, productCount, total) {
    const endpoint = `receipts`;
    let data = { active, productCount, total };
    return remote.post('appdata', endpoint, 'kinvey', data);
  }

  function getAllReceipts() {
    const endpoint = 'receipts';
    return remote.get('appdata', endpoint, 'kinvey');
  }
  function getMyReceipts(userId) {
    const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;
    return remote.get('appdata', endpoint, 'kinvey');
  }

  return {
    getReceiptById,
    createReceipt,
    getMyReceipts,
    getAllReceipts
  }
})();