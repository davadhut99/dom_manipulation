divide(N, head){
    //code here
    var even = null;
    var odd = null;
    var e = null;
    var o = null;

    while (head) {
        if (head.data % 2 == 0) {
            if (even == null) {
                even = head;
                e = head;
            }
            else {
                e.next = head;
                e = e.next;
            }
        }
        else {
            if (odd == null) {
                odd = head;
                o = head;
            }
            else {
                o.next = head;
                o = o.next;
            }
        }
        head = head.next;
    }
    if (e) {
        e.next = odd;
    }

    if (o) {
        o.next = null;
    }
    if (even) {
        return even;
    }
    return odd;
}