package controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import model.Worker;
import service.WorkerService;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "http://localhost:4200")
public class WorkerController {
    private final WorkerService workerService;

    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @PostMapping
    public Worker registerWorker(@RequestBody Worker worker) {
        if(worker.getServiceType() == null || worker.getServiceType().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ServiceType is required");
        }
        if(worker.getLocation() == null || worker.getLocation().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Location is required");
        }
        return workerService.registerWorker(worker);
    }

    @GetMapping
    public List<Worker> getAllWorkers() {
        return workerService.getAllWorkers();
    }
}