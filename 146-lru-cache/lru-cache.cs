    class Node {
        public int key, value;
        public Node prev, next;
        public Node(int key, int value){
            this.key = key;
            this.value = value;
        }
    }

public class LRUCache {
    private readonly int capacity;
    private readonly IDictionary<int, Node> map;
    private readonly Node head, tail;
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new Dictionary<int, Node>();
        head = new Node(0,0);
        tail = new Node(0,0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int Get(int key) {
        if (!this.map.ContainsKey(key)) return -1;
        map.TryGetValue(key, out Node node);
        remove(node);
        insertAtFront(node);
        return node.value;
    }
    
    public void Put(int key, int value) {
        if (map.ContainsKey(key)) {
            map.TryGetValue(key, out Node node);
            node.value = value;
            remove(node);
            insertAtFront(node);
        } else{
            if (map.Count == capacity) {
                Node lru = tail.prev;
                remove(lru);
                map.Remove(lru.key);
            }
            Node newNode = new Node(key, value);
            insertAtFront(newNode);
            map.Add(key, newNode);
        }
    }

    private void remove(Node node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void insertAtFront(Node node){
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.Get(key);
 * obj.Put(key,value);
 */