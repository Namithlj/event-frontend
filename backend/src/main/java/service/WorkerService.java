package service;

import java.util.List;
import org.springframework.stereotype.Service;
import model.Worker;
import repository.WorkerRepository;

@Service
public class WorkerService {
    private final WorkerRepository workerRepo;

    public WorkerService(WorkerRepository workerRepo) {
        this.workerRepo = workerRepo;
    }

    public Worker registerWorker(Worker worker) {
        return workerRepo.save(worker);
    }

    public List<Worker> getAllWorkers() {
        return workerRepo.findAll();
    }
}