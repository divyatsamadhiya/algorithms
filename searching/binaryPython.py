#Binary search program in python

def binarySearch(arr,target):
    start = 0
    end = len(arr)-1
    while start<=end:
        mid = (start+end)//2
        if target<arr[mid]:
            end = mid-1
        elif target>arr[mid]:
            start = mid+1
        else:
            return mid
    return mid
print(binarySearch([1,2,4,7,9,10],2))