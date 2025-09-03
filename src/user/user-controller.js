import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
    res.send("busca todos!");
});
   
router.get("/:id", (req, res) => {
       const id = req.params.id;
       res.send("busca um só! " + id);
});
   
router.post("/", (req, res) => {
       const body = JSON.stringify(req.body);
       res.send("criou algo! " + body);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = JSON.stringify(req.body);
    res.send("atualizei tudo " + id +" " + body);
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    const body = JSON.stringify(req.body);
    res.send("atualizei parcial " + id +" " + body);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.send("deletei tudo " + id );
});

export default router;