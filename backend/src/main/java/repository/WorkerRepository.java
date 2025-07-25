package repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import model.Worker;

public interface WorkerRepository extends MongoRepository<Worker, String> {}
