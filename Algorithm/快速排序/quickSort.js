/**
 * @author: momoxsy
 * @description
 * 快速排序：
 * 适用场景：无重复值的无序数组
 * 时间复杂度：n~(n)2
 * 
 * 快排思路：(升序为例)
 * 以最后一个值作为基础值，
 * a,循环将比此值小的值放到左边，比此值大的放到右边
 * b,以基础值新的位置为分界线，左右两侧分别执行a操作
 * 
 * @param array 
 * 
 * @return array 
 */

//递归快速排序
const quickSort = (array)=> {

    const sort = (left = 0, right = arr.length - 1)=> {

        // a
        const temp = arr[right];
        let i = left;
        let j = right;

        if(left >= right) {
            return ;
        }

        while(i < j) {
            //注：如果选取最右侧值，应先从左侧进行
            while(i < j && arr[i] <= temp) {

                i++;

            }
            arr[j] = arr[i];

            while(i < j && arr[j] >= temp) {

                j--;

            }
            arr[i] = arr[j];
        }
        arr[i] = temp;
        //b
        sort(left, j - 1);
        sort(j + 1, right);

    }

    let arr = array.concat();
    sort();
    return arr;

}