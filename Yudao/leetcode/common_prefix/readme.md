- leetcode 是大厂算法题的来源
- minlen 0~minLen 皆有可能
    老实取出部分 strs[0] strs[1]...strs[0minLen]
    for(let i= 0 ; i< strs[i].length;i++){
        strs[i].startsWith(strs[02]);
    }
    从后面开始[0minLen] [0minLen-1] .. 
    概率相同  中间：二分查找
    flower 

    low   middle  high
    0       2      4
    3       3      3
    3              2  退出循环

- 二分查找  log2（n）
    每次从中间查找  ，符合概率  每次都可以排除一半的元素
    low    middle    high  重复去做计算  并相应去挑战



    位移运行   >> 1   除二  取整
    算法  算法复杂度 O(n)  log2N

