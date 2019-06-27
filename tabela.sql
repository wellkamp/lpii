CREATE TABLE IF NOT EXISTS categoria (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE,
  UNIQUE INDEX nome_UNIQUE (nome ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS produto (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(5,2) NOT NULL,
  categoria_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX category_id_UNIQUE (id ASC) VISIBLE,
  UNIQUE INDEX name_UNIQUE (nome ASC) VISIBLE,
  INDEX fk_produto_categoria_idx (categoria_id ASC) VISIBLE,
  CONSTRAINT fk_produto_categoria
    FOREIGN KEY (categoria_id)
    REFERENCES categoria (id)
);