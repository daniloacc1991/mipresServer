--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.5

-- Started on 2018-10-10 10:28:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2834 (class 0 OID 17053)
-- Dependencies: 208
-- Data for Name: tipo_documento; Type: TABLE DATA; Schema: mipres; Owner: postgres
--

INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (1, 'RC', 'REGISTRO CIVIL', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (2, 'TI', 'TARJETA DE IDENTIDAD', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (3, 'CC', 'CÉDULA DE CIUDADANÍA', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (4, 'CE', 'CÉDULA DE EXTRANJERÍA', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (5, 'PA', 'PASAPORTE', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (6, 'NV', 'CERTIFICADO DE NACIDO VIVO', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (7, 'CD', 'CARNÉ DIPLOMÁTICO', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (8, 'SC', 'SALVO CONDUCTO DE PERMANENCIA', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (9, 'PR', 'PASAPORTE DE LA ONU', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (10, 'PE', 'PERMISO ESPECIAL DE PERMANENCIA', true);
INSERT INTO mipres.tipo_documento (id, codigo, descripcion, habilitado) VALUES (11, 'NI', 'NIT', true);


--
-- TOC entry 2841 (class 0 OID 0)
-- Dependencies: 207
-- Name: tipo_documento_id_seq; Type: SEQUENCE SET; Schema: mipres; Owner: postgres
--

SELECT pg_catalog.setval('mipres.tipo_documento_id_seq', 11, true);


-- Completed on 2018-10-10 10:28:40

--
-- PostgreSQL database dump complete
--

