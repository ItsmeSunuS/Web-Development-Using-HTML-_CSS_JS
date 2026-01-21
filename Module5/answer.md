                Database Fundamentals – Conceptual Understanding (Theory)

1.Why is db.json not suitable as a database for real projects?

db.json (or any file-based JSON storage) is commonly used for learning, demos, or mock APIs, but it is not suitable for real-world production applications., It is useful for learning and prototyping, but real applications require a proper database system to ensure performance, safety, and reliability.

Limitations of File-Based Storage
a) Performance Issues

Entire file must be read into memory for every operation.
Write operations often require rewriting the whole file.
Performance degrades significantly as data size grows.
No indexing mechanism for fast queries.

b) Scalability Problems

Cannot handle large volumes of data efficiently.
Not suitable for multiple users or concurrent requests.
Difficult to scale horizontally (across servers).
File locking can block other operations.

c) Reliability Issues

High risk of data corruption if the process crashes during a write.
No automatic backup or recovery mechanism.
No transaction support (partial writes may corrupt data).
Manual error handling required.

d) Concurrency Limitations

Multiple users writing simultaneously can cause race conditions.
No built-in concurrency control.
Not thread-safe by default.

e) Security Limitations

Security Limitations
No authentication or authorization.
Data stored in plain text.
No access control or encryption.

2. Ideal Characteristics of a Database System (Beyond Just Storage)

A real database system does much more than store data. Below are the key characteristics of an ideal database system:

a) Performance

Fast read and write operations.
Supports indexing for quick data retrieval.
Optimized query execution.
Efficient memory and disk usage.

b) Concurrency

Supports multiple users accessing data simultaneously.
Uses locking or MVCC (Multi-Version Concurrency Control).
Prevents data inconsistency during concurrent operations.

c) Reliability

Ensures data is not lost due to crashes or failures.
Supports ACID properties (Atomicity, Consistency, Isolation, Durability).
Automatic recovery after failures.

d) Data Integrity

Enforces rules such as:

Primary keys
Foreign keys
Constraints
Data validation
Prevents invalid or inconsistent data from being stored.

e) Scalability

Can handle growing data and user load.

Supports:

Vertical scaling (better hardware)
Horizontal scaling (distributed systems)
Works efficiently for both small and large applications.

f) Fault Tolerance

Continues operating even if part of the system fails.
Supports replication and backups.
Enables disaster recovery.


3. Types of Databases and Their Use Cases

Databases can be broadly classified into Relational and Non-Relational (NoSQL) databases.

3.1 Relational Databases (SQL)

Description

Data stored in tables (rows and columns).
Uses Structured Query Language (SQL).
Strong schema and strict relationships.
Supports ACID transactions.

Examples

MySQL, PostgreSQL, Oracle,SQL Server.

Use Cases / Applications

Banking and financial systems
E-commerce platforms
Inventory management
Enterprise applications
Systems requiring strong consistency and transactions.

3.2 Non-Relational Databases (NoSQL)

Description

Schema-less or flexible schema.
Designed for high scalability and performance.
Data stored in various formats:
Document
Key-value
Column
Graph


Examples

MongoDB (Document-based), Redis (Key-value),Cassandra (Column-based), Neo4j (Graph-based)

Use Cases / Applications

Social media platforms
Real-time analytics
IoT applications
Content management systems
Large-scale distributed systems.

