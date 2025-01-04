# 🚀 Scalable WebSocket Chat Application

A high-performance, real-time chat application showcasing scalable WebSocket architecture using Redis Pub/Sub, Kafka, and PostgreSQL. Built with modern technologies and Docker for seamless deployment.

## 🌟 Features

- Real-time bidirectional communication using WebSockets
- Horizontally scalable architecture with Redis Pub/Sub
- Message persistence with PostgreSQL
- Reliable message delivery using Kafka
- Containerized setup with Docker
- Modern ORM integration with Prisma

## 🏗 Architecture

The application follows a microservices architecture with these key components:

- **WebSocket Server**: Handles real-time client connections
- **Redis Pub/Sub**: Enables cross-instance message broadcasting
- **Kafka**: Manages asynchronous message delivery
- **PostgreSQL**: Provides persistent message storage

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **WebSocket** - Full-duplex communication protocol
- **Redis** - In-memory data structure store
- **Apache Kafka** - Distributed messaging system
- **PostgreSQL** - Relational database
- **Docker** - Containerization platform
- **Prisma** - Modern database ORM

## 📋 Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or higher)
- Docker
- Docker Compose

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/dinesh-gaire/Scalable-WebSocket.git
cd Scalable-WebSocket
```

### Set Up Components

1. **WebSocket Server**
   ```bash
   npm install
   npm run dev
   ```

2. **Redis**
   ```bash
   docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
   ```

3. **PostgreSQL**
   ```bash
   docker compose up -d
   ```

4. **Kafka**
   - Start Zookeper Container and expose PORT 2181.
   - Start Kafka Container, expose PORT 9092 and setup ENV variables.
   ```bash
   docker run -p 2181:2181 zookeeper
   
   docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
   -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
   -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
   confluentinc/cp-kafka
   ```

## ⚙️ Configuration

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://postgres:chatdb@localhost:5432/chatdb?schema=public"
```

## 🧪 Testing

1. Open multiple browser windows
2. Connect to the WebSocket server
3. Send messages to verify real-time communication
4. Check PostgreSQL for message persistence
5. Monitor Kafka consumers for message delivery

## 🔍 Implementation Details

The application is split into two main parts:

1. **Basic Chat Implementation**
   - WebSocket server setup
   - Redis Pub/Sub integration
   - Real-time message broadcasting

2. **Enhanced Features**
   - Kafka message queue integration
   - PostgreSQL message persistence
   - Scalability improvements
  
---
