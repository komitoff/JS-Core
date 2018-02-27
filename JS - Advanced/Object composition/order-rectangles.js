function solve(matrix) {

    let result = [];
  
    for (const rect of [...matrix]) {
      let obj = {
        width: rect[0],
        height: rect[1],
        area: function () {
          
          return this.width * this.height
        },
        compareTo: function (other) {
          if (other.area() !== this.area()) {
            return other.area() - this.area();
          }
          return other.width - this.width;
  
        }
      }
      result.push(obj);
    }
  
    result.sort((a, b) => a.compareTo(b));
    return result;
  }