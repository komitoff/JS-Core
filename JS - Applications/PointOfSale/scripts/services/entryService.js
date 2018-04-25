let entryService = (() => {

  function getEntriesByReceiptId(receiptId) {
    const endpoint = `entries?query={"${receiptId}":"receiptId"}`;
    remote.get('appdata', endpoint, 'kinvey');
  }

  function addEntry(type, qty, price, receiptId) {
    const endpoint = `entries`;
    let data = { type, qty, price, receiptId };
    remote.post('appdata', endpoint, 'kinvey', data);
  }

  function deleteEntry(entryId) {
    const endpoint = `entries/${entryId}`;
    remote.remove('appdata', endpoint, 'kinvey');
  }

  return {
    getEntriesByReceiptId,
    addEntry,
    deleteEntry
  }
})();